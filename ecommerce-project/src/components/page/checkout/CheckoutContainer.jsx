import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./CheckoutContainer.module.css";

const CheckoutContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio.")
        .min(5, "El nombre debe tener al menos 5 caracteres.")
        .max(23, "El nombre debe tener menos de 23 caracteres."),
      email: Yup.string()
        .email("El email debe contener @")
        .required("Este campo es obligatorio."),
      password: Yup.string()
        .required("Este campo es obligatorio.")
        .matches(/^(?=.*\d)(?=.*[A-Z]).{8,}$/, {
          message:
            "La contraseña debe tener al menos 8 caracteres, un número y una letra mayúscula.",
        }),
      repeatPassword: Yup.string()
        .required("Las contraseñas no coinciden.")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden."),
    }),
    validateOnChange: false,
  });

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <h1>Datos de contacto</h1>
        <TextField
          type="text"
          label="Nombre"
          variant="outlined"
          error={errors.name ? true : false}
          name="name"
          onChange={handleChange}
          helperText={errors.name}
          className={styles.inputField}
        />
        <TextField
          type="text"
          label="Email"
          variant="outlined"
          error={errors.email ? true : false}
          name="email"
          onChange={handleChange}
          helperText={errors.email}
          className={styles.inputField}
        />
        <TextField
          type="password"
          label="Contraseña"
          variant="outlined"
          error={errors.password ? true : false}
          name="password"
          onChange={handleChange}
          helperText={errors.password}
          className={styles.inputField}
        />
        <TextField
          type="password"
          label="Repetir Contraseña"
          variant="outlined"
          error={errors.repeatPassword ? true : false}
          name="repeatPassword"
          onChange={handleChange}
          helperText={errors.repeatPassword}
          className={styles.inputField}
        />
        <Button
          type="submit"
          variant="contained"
          className={styles.submitButton}
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
