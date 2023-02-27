import * as Yup from "yup";

export const profileSchema = Yup.object({
  name: Yup.string().required("Informe o nome."),
  password: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 dígitos")
    .nullable()
    .transform((value) => (!!value ? value : null)),
  confirm_password: Yup.string()
    .nullable()
    .transform((value) => (!!value ? value : null))
    .oneOf(
      //@ts-ignore
      [Yup.ref("password"), null],
      "A confirmação da senha não confere."
    )
    //VERIFICAÇÃO CONDICIONAL
    .when("password", {
      //verifica se há conteúdo em password,
      is: (Field: any) => Field,
      then: (schema) =>
        schema
          .nullable()
          .required("Informe a confirmação da senha.")
          .transform((value) => (!!value ? value : null)),
    }),
});
