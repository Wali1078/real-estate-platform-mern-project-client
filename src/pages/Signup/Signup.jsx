import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SocialSignIn from "../../components/Shared/SocialSignIn";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { imageUpload } from "../../api/utils";
import { getToken, saveUser } from "../../api/auth";
import { TbLoader3 } from "react-icons/tb";
import { Helmet } from "react-helmet-async";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Real Estate
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Signup() {
  const { user, createUser, updateUserProfile,  loading } =
    useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const onSubmit = async (data) => {
    console.log(data);
    const toastId = toast.loading("Creating user ...");
    try {
      //1. Upload Image
      const imageFile = { image: data.photoURL[0] };
      // console.log(imageFile);
      const imageData = await imageUpload(imageFile);
      //  console.log(imageData);

      //2. User Registration
      const result = await createUser(data.email, data.password);
      console.log(result);

      //3. Save username & profile photo
      const fullName = `${data.firstName} ${data.lastName}`;
      await updateUserProfile(fullName, imageData?.data?.display_url);

      //4. save user data in database
      const dbResponse = await saveUser(result?.user);
      console.log(dbResponse);
      //5. get token
      await getToken(result?.user?.email);
      navigate(from, { replace: true });

      toast.success("Signup Successful", { id: toastId });
    } catch (err) {
      // console.log(err);
      toast.error(err?.message, { id: toastId });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
     <Helmet>
        <title>Dream🏚️ |  Signup</title>
      </Helmet>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Signup Now
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              //   onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("firstName", { required: true })}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("lastName", { required: true })}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  {errors.firstName?.type === "required" && (
                    <p className="text-red-600">First Name is required</p>
                  )}
                  {errors.lastName?.type === "required" && (
                    <p className="text-red-600">Last Name is required</p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("photoURL", { required: true })}
                    name="photoURL"
                    required
                    fullWidth
                    id="upload"
                    label="Select Your Profile Image:"
                    type="file"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  {errors.photoURL?.type === "required" && (
                    <p className="text-red-600">Photo URL is required</p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    })}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  {errors.email?.type === "required" && (
                    <p className="text-red-600">Email is required</p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p className="text-red-600">Please enter a valid email</p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...register("check", { required: true })}
                        name="check"
                        value="allowExtraEmails"
                        color="primary"
                        required
                      />
                    }
                    label={`I want to accept your T&C`}
                  />
                </Grid>
                <Grid item xs={12}>
                  {errors.check?.type === "required" && (
                    <p className="text-red-600">Please Accept T&C</p>
                  )}
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2,py:2 }}
              >
                {loading ? (
                <TbLoader3 size={30} className='animate-spin m-auto' />
              ) : (
                'Sign up'
              )}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <NavLink to="/login" className="text-blue-600">
                    Already have an account? Sign in
                  </NavLink>
                </Grid>
              </Grid>
              <SocialSignIn />
            </Box>

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
