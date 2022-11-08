const { body } = require("express-validator");

const photoInsertValidation = () => {
  return [
    body("title")
      .not()
      .equals("undefined")
      .withMessage("O título é obrigatório")
      .isString()
      .withMessage("O título é obrigatório")
      .isLength({ min: 3 })
      .withMessage("O título precisa ter no mínimo 3 caracteres.")
      .isLength({ max: 30 })
      .withMessage("O título pode ter no máximo 30 caracteres."),
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("A imagem é obrigatória");
      }
      return true;
    }),
  ];
};

const photoUpdateValidation = () => {
  return [
    body("image")
      .optional()
      .custom((value, { req }) => {
        if (!req.file) {
          throw new Error("A imagem é obrigatória");
        }
        return true;
      }),
    body("title")
      .optional()
      .isString()
      .withMessage("O título é obrigatório")
      .isLength({ min: 3 })
      .withMessage("O título precisa ter no mínimo 3 caracteres.")
      .isLength({ max: 30 })
      .withMessage("O título pode ter no máximo 30 caracteres."),
  ];
};

const commentValidation = () => {
  return [
    body("comment").isString().withMessage("O comentário é obrigatório").isLength({ max: 30 }).withMessage("O comentário pode ter no máximo 30 caracteres.")
  ];
};

module.exports = {
  photoInsertValidation,
  photoUpdateValidation,
  commentValidation,
};