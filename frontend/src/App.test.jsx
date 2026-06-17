import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";

import App from "./App";

test("ao clicar em Criar exibe a tela de criação", async () => {
  render(<App />);

  const botaoCriar = screen.getByText("Criar");

  await userEvent.click(botaoCriar);

  expect(
    screen.getByText("Criar Usuário")).toBeInTheDocument();
});