import { useState } from "react";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("");
  const [name, setName] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await fetch("http://localhost:8080/users");

      if (!response.ok) {
        throw new Error("Erro ao buscar usuários");
      }

      const data = await response.json();

      setUsers(data);
      setScreen("list");
    } catch (error) {
      alert(error.message);
    }
  }

  async function createUser() {
    if (name.trim() === "") {
      alert("Digite um nome");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao criar usuário");
      }

      alert("Usuário criado com sucesso!");

      setName("");
    } catch (error) {
      alert(error.message);
    }
  }

  async function deleteUser() {
    if (deleteId.trim() === "") {
      alert("Digite um ID");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/users/${deleteId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao deletar usuário");
      }

      alert("Usuário removido com sucesso!");

      setDeleteId("");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="container">
      <h1>Sistema de Usuários</h1>

      <div className="menu">
        <button
          className="create-btn"
          onClick={() => setScreen("create")}
        >
          Criar
        </button>

        <button
          className="list-btn"
          onClick={getUsers}
        >
          Listar
        </button>

        <button
          className="delete-btn"
          onClick={() => setScreen("delete")}
        >
          Deletar
        </button>
      </div>

      {screen === "create" && (
        <div className="card">
          <h2>Criar Usuário</h2>

          <input
            type="text"
            placeholder="Digite o nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            className="create-btn"
            onClick={createUser}
          >
            Salvar
          </button>
        </div>
      )}

      {screen === "delete" && (
        <div className="card">
          <h2>Deletar Usuário</h2>

          <input
            type="number"
            placeholder="Digite o ID"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
          />

          <button
            className="delete-btn"
            onClick={deleteUser}
          >
            Excluir
          </button>
        </div>
      )}

      {screen === "list" && (
        <div className="card">
          <h2>Usuários Cadastrados</h2>

          {users.length === 0 ? (
            <p>Nenhum usuário encontrado.</p>
          ) : (
            users.map((user) => (
              <div
                className="user"
                key={user.id}
              >
                <strong>ID:</strong> {user.id}
                <br />
                <strong>Nome:</strong> {user.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;