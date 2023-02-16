const Consult = require("../models/Consult");
const Photo = require("../models/Photo");

const create = async (req, res, next) => {
  //const url = process.env.URL || 'http://localhost:3001';

  const { consult_id } = req.params;

  const consult = await Consult.find({ _id: consult_id });

  if (!consult) {
    next({
      status: 404,
      message: { path: "error", message: "Consulta não localizada!" },
    });
  }

  const { originalname: name, size, key, location: url = "" } = req.file;

  try {
    const photo = await Photo.create({
      owner: consult_id,
      onModel: "Consult",
      name,
      size: size,
      key: key,
      url:
        process.env.STORAGE_TYPE === "local"
          ? `${process.env.APP_URL}/${key}`
          : `${process.env.S3_URL}/${key}`,
      createdBy: req.user,
    });
    return res.status(201).json(photo);
  } catch (error) {
    return next({
      status: 500,
      originalError: error,
      message: { path: "general", message: "Erro ao salvar a imagem!" },
    });
  }
};

const delete_photo = async (req, res, next) => {
  const { id } = req.params;
  try {
    const photo = await Photo.findById(id);
    photo.updatedBy = req.user;
    await photo.remove();
    return res.json({ path: "general", message: "Foto excluida com sucesso" });
  } catch (error) {
    next({
      status: 500,
      originalError: error,
      message: { path: "error", message: "Erro ao tentar excluir a imagem!" },
    });
  }
};

const list = async (req, res, next) => {
  const { consult_id } = req.params;
  try {
    const photos = await Photo.find({ owner: consult_id, onModel: "Consult" });
    return res.json(photos);
  } catch (error) {
    next({
      status: 500,
      originalError: error,
      message: { path: "error", message: "Erro ao obter as imagens!" },
    });
  }
};

module.exports = { create, delete_photo, list };
