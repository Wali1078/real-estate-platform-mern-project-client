import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { TbLoader3 } from "react-icons/tb";
import { imageUpload } from "../../../../api/utils";
import toast from "react-hot-toast";
import { updateUser } from "../../../../api/auth";

// import toast from "react-hot-toast";

export default function UpdateProfileModal() {
  const { user,updateUserProfile } = useAuth();

  //  console.log(property);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
        //1. Upload Image
        const imageFile = { image: data.photoURL[0] };
        // console.log(imageFile);
        const imageData = await imageUpload(imageFile);
        // console.log(imageData);
        
        //3. change username & profile photo
      const result =  await updateUserProfile(data.name, imageData?.data?.display_url);
//   console.log(result);
        //4. update user data in database
     const dbResponse = await updateUser(user);
        // console.log(dbResponse); 
       
        toast.success("Profile Update Successful");
        closeModal()
      } catch (err) {
        // console.log(err);
        toast.error(err?.message);
      }
    };
    //clear form after submit (hook form er sahajye)
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
          reset({ name: "", photoURL: ""});
        }
      }, [formState.isSubmitSuccessful, reset]);
  return (
    <>
      <div className=" inset-0 flex items-center justify-center ">
        <button
          onClick={openModal}
          className="rounded-md w-full border-2 border-slate-400 px-5 py-2 text-sm font-medium text-slate-400 shadow-md transition duration-150 ease-in-out hover:bg-slate-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600"
        >
          Update Profile
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6  align-middle shadow-xl transition-all  ">
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    //   onSubmit={handleSubmit}
                    sx={{ mt: 2 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          {...register("name", { required: true })}
                          autoComplete="given-name"
                          name="name"
                          required
                          fullWidth
                          id="name"
                          label="Name"
                          autoFocus
                        />
                      </Grid>

                      <Grid item xs={12}>
                        {errors.name?.type === "required" && (
                          <p className="text-red-600">First Name is required</p>
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
                    </Grid>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, py: 2 }}
                    >
                      {"Update Profile"}
                    </Button>

                    <Button
                      type="button"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 1, mb: 2, py: 2 }}
                      onClick={closeModal}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
