from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def ler_raiz():
    return {"mensagem": "Olá, eu sou o backend do agente de IA!"}