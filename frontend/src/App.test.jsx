import { test, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

import App from "./App";

afterEach(() => {
  cleanup();
});

test("ao clicar em Criar exibe a tela de criação", async () => {
  render(<App />);

  const botaoCriar = screen.getByText("Criar");

  await userEvent.click(botaoCriar);

  expect(
    screen.getByText("Criar Usuário")).toBeInTheDocument();
});

test("permite digitar um nome", async () => {
  render(<App />);

  await userEvent.click(screen.getByText("Criar"));

  const input = screen.getByPlaceholderText("Digite o nome");

  await userEvent.type(input, "Vitorio");

  expect(input).toHaveValue("Vitorio");
});


