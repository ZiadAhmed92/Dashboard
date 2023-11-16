import { Alert, Box, Button, InputLabel, Snackbar, Stack, TextField } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import { useForm } from "react-hook-form";

const Form = () => {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regphone =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [open, setOpen] =useState(false);
  const onSubmit = (data) => {
    handleClick();
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [Role, setRole] = useState("Admin");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <>
      <Header title="CREATE USER" subTitle="Create a New User Profile" />
      <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={"row"} sx={{ gap: 3, marginY: "10px" }}>
          <TextField
            error={Boolean(errors.firstName)}
            {...register("firstName", { required: true, minLength: 3 })}
            helperText={
              Boolean(errors.firstName)
                ? "This field is required & min 3 character"
                : null
            }
            id="filled-basic"
            label="First Name"
            variant="filled"
            sx={{ width: "50%" }}
          />
          <TextField
            error={Boolean(errors.lastName)}
            {...register("lastName", { required: true, minLength: 3 })}
            helperText={
              Boolean(errors.lastName)
                ? "This field is required & min 3 character"
                : null
            }
            id="filled-basic"
            label="Last Name"
            variant="filled"
            sx={{ width: "50%" }}
          />
        </Stack>
        <TextField
          error={Boolean(errors.email)}
          {...register("email", { required: true, pattern: regEmail })}
          helperText={
            Boolean(errors.email)
              ? "Please provide a valid email address"
              : null
          }
          id="filled-basic"
          label="Email"
          variant="filled"
          sx={{ my: "10px" }}
        />
        <TextField
          error={Boolean(errors.phone)}
          {...register("phone", { required: true, pattern: regphone })}
          helperText={
            Boolean(errors.phone) ? "Please provide a valid Phone number" : null
          }
          id="filled-basic"
          label="Contact Number"
          variant="filled"
          sx={{ my: "10px" }}
        />
        <TextField
          id="filled-basic"
          label="Adress1"
          variant="filled"
          sx={{ my: "10px" }}
        />
        <TextField
          id="filled-basic"
          label="Adress2"
          variant="filled"
          sx={{ my: "10px" }}
        />
        <FormControl variant="filled" sx={{ my: "10px", Width: "100%" }}>
          <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={Role}
            onChange={handleChange}
          >
            <MenuItem value={10}>Admin</MenuItem>
            <MenuItem value={20}>Manger</MenuItem>
            <MenuItem value={30}>User</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            sx={{ textTransform: "capitalize" }}
            variant="contained"
          >
            Create New User
          </Button>
          <Snackbar  anchorOrigin={{ vertical:"top", horizontal:"right" }} open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
              
            >
              Account created successfully!
            </Alert>
          </Snackbar>
        </Box>
      </Stack>
    </>
  );
};

export default Form;
