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
      const data = await response.json();

      setUsers(data);
      setScreen("list");
    } catch (error) {
      console.error(error);
    }
  }

  async function createUser() {
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      });

      if (response.ok) {
        alert("Usuário criado com sucesso!");
        setName("");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteUser() {
    try {
      const response = await fetch(
        `http://localhost:8080/users/${deleteId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Usuário removido com sucesso!");
        setDeleteId("");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sistema de Usuários</h1>

      <button onClick={() => setScreen("create")}>
        Criar
      </button>

      <button
        onClick={getUsers}
        style={{ marginLeft: "10px" }}
      >
        Listar
      </button>

      <button
        onClick={() => setScreen("delete")}
        style={{ marginLeft: "10px" }}
      >
        Deletar
      </button>

      <hr />

      {screen === "create" && (
        <div>
          <h2>Criar Usuário</h2>

          <input
            type="text"
            placeholder="Digite o nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            onClick={createUser}
            style={{ marginLeft: "10px" }}
          >
            Salvar
          </button>
        </div>
      )}

      {screen === "delete" && (
        <div>
          <h2>Deletar Usuário</h2>

          <input
            type="number"
            placeholder="Digite o ID"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
          />

          <button
            onClick={deleteUser}
            style={{ marginLeft: "10px" }}
          >
            Excluir
          </button>
        </div>
      )}

      {screen === "list" && (
        <div>
          <h2>Usuários</h2>

          {users.length === 0 ? (
            <p>Nenhum usuário encontrado.</p>
          ) : (
            users.map((user) => (
              <div key={user.id}>
                {user.id} - {user.name}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default App;