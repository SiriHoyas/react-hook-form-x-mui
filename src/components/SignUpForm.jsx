import { Button, Grid, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

function SignUpForm() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid container direction={"column"} gap={3} width={"450px"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container gap={2} width={"100%"} justifyContent={"space-between"}>
          <Controller
            control={control}
            name="firstName"
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                label="First Name"
                onChange={field.onChange}
                value={field.value}
                helperText={errors.firstName ? errors.firstName.message : null}
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                label="Last Name"
                onChange={field.onChange}
                value={field.value}
                helperText={errors.lastName ? errors.lastName.message : null}
              />
            )}
          />
        </Grid>
        <Grid container direction={"column"} mt={2} gap={2}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                "^[w-.]+@([w-]+.)+[w-]{2,4}$": "Invalid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                label="Email"
                onChange={field.onChange}
                value={field.value}
                helperText={errors.email ? errors.email.message : null}
              />
            )}
          />
          <Controller
            control={control}
            name="phone"
            rules={{ required: "Phone" }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                label="Phone Number"
                onChange={field.onChange}
                value={field.value}
                helperText={errors.phone ? errors.phone.message : null}
              />
            )}
          />
        </Grid>

        <Button variant="outlined" type="submit" sx={{ marginTop: "2rem" }}>
          Submit
        </Button>
      </form>
    </Grid>
  );
}

export default SignUpForm;
