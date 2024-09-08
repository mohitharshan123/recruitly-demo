import { useForm } from "@mantine/form";
import { TwitterIcon } from "@mantinex/dev-icons";
import { upperFirst, useLocalStorage, useToggle } from "@mantine/hooks";
import {
  Anchor,
  Button,
  Divider,
  Flex,
  Group,
  LoadingOverlay,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

import { AUTH_INITIAL_VALUES, AUTH_TYPES, AUTH_VALIDATOR } from "./constants";
import GoogleIcon from "../../assets/Google.svg";
import IconButton from "../../components/IconButton";
import { API_KEY, API_KEY_LS, ROUTES } from "../../constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AuthenticationForm = (props: PaperProps) => {
  const navigate = useNavigate();
  const [authType, toggleAuthType] = useToggle([
    AUTH_TYPES.LOGIN,
    AUTH_TYPES.REGISTER,
  ]);
  const form = useForm({
    initialValues: AUTH_INITIAL_VALUES,
    validate: AUTH_VALIDATOR,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // eslint-disable-next-line  @typescript-eslint/no-unused-vars
  const [_, setApiKey] = useLocalStorage({
    key: API_KEY_LS,
  });

  const handleSubmit = () => {
    setApiKey(API_KEY);
    setIsSubmitting(true);
    // Showing a dummy loading state for effect
    setTimeout(() => {
      setIsSubmitting(false);
      navigate(ROUTES.dashboard);
    }, 2000);
  };

  return (
    <Flex justify="center" align="center" direction="row" h="100vh">
      <LoadingOverlay
        visible={isSubmitting}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "pink", type: "bars" }}
      />
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" fw={500}>
          Welcome to Recruitly
        </Text>

        <Group grow mb="md" mt="md">
          <IconButton
            icon={
              <img
                src={GoogleIcon}
                alt="google-icon"
                height={20}
                width={20}
                className="object-fit"
              />
            }
          >
            Google
          </IconButton>
          <IconButton
            icon={
              <TwitterIcon
                style={{ width: "1rem", height: "1rem" }}
                color="#00ACEE"
              />
            }
            radius="xl"
          >
            Twitter
          </IconButton>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            {authType === AUTH_TYPES.REGISTER && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
                radius="md"
              />
            )}
            <TextInput
              required
              label="Email"
              placeholder="hello@recruitly.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={form.errors.password}
              radius="md"
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              onClick={() => toggleAuthType()}
              size="xs"
            >
              {authType === AUTH_TYPES.REGISTER
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit" radius="xl">
              {upperFirst(authType)}
            </Button>
          </Group>
        </form>
      </Paper>
    </Flex>
  );
};

export default AuthenticationForm;
