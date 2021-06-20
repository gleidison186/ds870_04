const Patient = require("../models/Patient");
const Appointment = require("../models/Appointment");
const Sequelize = require("sequelize");

module.exports = {
    async newPatient(req, res) {
        const { name, email, phone } = req.body;
        if (!name || !email || phone.trim() === "") {
            res.status(400).json({
                msg: "Dados obrigatórios não foram preenchidos.",
            });
        }
        const patient = await Patient.create({
            name,
            email,
            phone
        }).catch((error) => {
            res.status(500).json({ msg: "Não foi possível inserir os dados " + error })
        })
        if (patient){
            res.status(201).json({ msg: "Novo paciente adicionado" })
        }else{
            res.status(404).json({ msg: "Não foi possível cadastrar novo paciente" })
        }
    },


    async searchPatientByName(req, res) {
        const patientName = req.params.patientName;
        if (!patientName) {
            return res.status(400).json({
                msg: "Campo paciente vazio.",
            });
        }
        const Op = Sequelize.Op;
        //console.log(patientName);
        const patient = await Patient.findAll({
            where: { name: { [Op.like]: "%" + patientName + "%" } },
        }).catch((error) => {
            return res.status(500).json({ msg: "Falha na conexão " + error });
        });
        if (patient) {
            if (patient == "") {
                return res
                .status(404)
                .json({ msg: "Não há consultas para este paciente." });
            } else {
                return res.status(200).json({ patient });
            }
        } else {
            return res
                .status(404)
                .json({ msg: "Não foi possível encontrar consultas." });
        }
    },

    async updatePatient(req, res) {
		const patientId = req.body.id;
		const patient = req.body;
		if (!patientId) res.status(400).json({ msg: "ID do paciente vazio." });
		else {
			const patientExists = await Patient.findByPk(patientId);
			if (!patientExists)
				res.status(404).json({ msg: "Paciente não encontrado." });
			else {
				if (patient.name || patient.email || patient.phone) {
					await Patient.update(patient, {
						where: { id: patientId },
					});
					return res
						.status(200)
						.json({ msg: "Paciente atualizado com sucesso." });
				} else
					return res
						.status(400)
						.json({ msg: "Campos obrigatórios não preenchidos." });
			}
		}
	}, 

    async searchPatientByPhysicianId(req, res) {
        const physicianId = req.params.physicianId;
        if (!physicianId) {
            return res.status(400).json({
                msg: "Campo paciente vazio.",
            });
        }
        //console.log(patientName);
        const appointments = await Appointment.findAll({
            where: { physicianId },
        }).catch((error) => {
            return res.status(500).json({ msg: "Falha na conexão " + error });
        });
        let patients = [];
        if(appointments){
            if(appointments == ""){
                return res.status(500).json({ msg: "Nenhum paciente foi encontrado para este médico" });
            }else{
                for(var key in appointments){
                    patients.push(appointments[key].patientId);
                }
                if (patients) {
                    if (patients == "") {
                        return res
                        .status(404)
                        .json({ msg: "Não foram encontrados pacientes" });
                    } else {
                        const obj = [];
                        const result = await Patient.findAll({
                            where: { id: patients },
                        }).catch((error) => {
                            return res.status(500).json({ msg: "Falha na conexão " + error });
                        });
                        obj.push({result});
                        if(obj) {
                            if(obj == ""){
                                return res
                                .status(404)
                                .json({ msg: "Não foram encontrados pacientes" });
                            }else{
                                return res.status(200).json({ obj });
                            }
                        }
                    }
                } else {
                    return res
                        .status(404)
                        .json({ msg: "Não foi possível encontrar pacientes." });
                }
            }
        }
    },
};