import {
  Heading,
  Flex,
  Field,
  Input,
  IconButton,
  Center,
  Button,
} from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { data } from "react-router";
import { validator } from "validator";

const Account = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Center width={"100%"}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate />
      <Flex
        gap={5}
        justifyContent={"center"}
        alignItems={"center"}
        width={"30%"}
        padding={5}
        rounded={"md"}
        shadow={"xl"}
        marginTop={10}
        flexDirection={"column"}
      >
        <Heading>Sign in</Heading>
        <Field.Root invalid={false}>
          <Field.Label>Email</Field.Label>
          <Input
            placeholder="me@example.com"
            {...register("email", {
              required: true,
              validate: (value) => validator.isEmail(value),
            })}
          />
          <Field.ErrorText>Invalid email</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={false}>
          <Field.Label>Password</Field.Label>
          <Flex width={"100%"}>
            <Input type={showPassword ? undefined : "password"} />
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff /> : <Eye />}
            </IconButton>
          </Flex>
          <Field.ErrorText>Required</Field.ErrorText>
        </Field.Root>
        <Button size="sm" width={"100%"}>
          Confirm
        </Button>
      </Flex>
    </Center>
  );
};

export default Account;
