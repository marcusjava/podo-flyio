const mongoose = require("mongoose");
const beautifyUnique = require("mongoose-beautiful-unique-validation");

const UserSchema = mongoose.Schema(
  {
    thumbnail: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "Campo obrigatorio"],
    },
    phone: {
      type: String,
    },
    nasc: {
      type: String,
    },
    cpf: {
      type: String,
      required: [true, "Campo obrigatorio"],
      unique: "CPF já cadastrado",
    },
    rg: { type: String },
    email: {
      type: String,
    },
    address: {
      street: { type: String, required: true },
      neighborhood: { type: String, required: [true, "Campo obrigatorio"] },
      city: { type: String, required: [true, "Campo obrigatorio"] },
      state: { type: String, required: [true, "Campo obrigatorio"] },
      cep: { type: String, default: "49000-000" },
    },
    password: {
      type: String,
      required: [true, "Campo obrigatorio"],
      select: false,
    },
    role: {
      type: String,
      enum: ["Usuario", "Administrador"],
      default: "Usuario",
    },
    status: {
      type: String,
      enum: ["Ativo", "Inativo"],
      default: "Ativo",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

UserSchema.virtual("avatar_url").get(function () {
  return process.env.STORAGE_TYPE == "local"
    ? `${process.env.APP_URL}/${this.thumbnail}`
    : `${process.env.S3_URL}/${this.thumbnail}`;
});

UserSchema.plugin(beautifyUnique);

module.exports = mongoose.model("User", UserSchema);
