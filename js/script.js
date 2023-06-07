function adicionarCliente() {
    var clientesDiv = document.getElementById("clientes");
    var novoClienteDiv = document.createElement("div");
    novoClienteDiv.classList.add("cliente");
    novoClienteDiv.innerHTML = `
      <input type="text" class="nomeCliente" placeholder="Nome do Cliente">
      <button onclick="excluirCliente(this)">Excluir</button>
    `;
    clientesDiv.appendChild(novoClienteDiv);
  }
  
  function adicionarProduto() {
    var produtosDiv = document.getElementById("produtos");
    var novoProdutoDiv = document.createElement("div");
    novoProdutoDiv.classList.add("produto");
    novoProdutoDiv.innerHTML = `
      <input type="text" class="nomeProduto" placeholder="Nome do Produto">
      <input type="number" class="precoProduto" placeholder="Preço do Produto">
      <button onclick="excluirProduto(this)">Excluir</button>
    `;
    produtosDiv.appendChild(novoProdutoDiv);
  }
  
  function excluirCliente(element) {
    var clienteDiv = element.parentNode;
    clienteDiv.parentNode.removeChild(clienteDiv);
  }
  
  function excluirProduto(element) {
    var produtoDiv = element.parentNode;
    produtoDiv.parentNode.removeChild(produtoDiv);
  }
  
  function calcular() {
    var total = parseFloat(document.getElementById("total").value);
    var numClientes = parseInt(document.getElementById("numClientes").value);
    var clientes = document.getElementsByClassName("cliente");
    var produtos = document.getElementsByClassName("produto");
  
    var somaProdutos = 0;
    var divisaoConta = "";
  
    for (var i = 0; i < produtos.length; i++) {
      var nomeProduto = produtos[i].getElementsByClassName("nomeProduto")[0].value;
      var precoProduto = parseFloat(produtos[i].getElementsByClassName("precoProduto")[0].value);
  
      somaProdutos += precoProduto;
  
      divisaoConta += nomeProduto + ": R$ " + precoProduto.toFixed(2) + "<br>";
    }
  
    divisaoConta += "<br>";
  
    for (var i = 0; i < clientes.length; i++) {
      var nomeCliente = clientes[i].getElementsByClassName("nomeCliente")[0].value;
      divisaoConta += "Pagante: " + nomeCliente + "<br>";
      var valorIndividual = (total + (total * 0.1)) / numClientes;
      var valorConsumido = somaProdutos / numClientes;
      var valorServico = (total * 0.1) / numClientes;
  
      divisaoConta += "Total com 10% de serviço: R$ " + (total + (total * 0.1)).toFixed(2) + "<br>";
      divisaoConta += "Valor individual: R$ " + valorIndividual.toFixed(2) + "<br>";
      divisaoConta += "Valor consumido por cliente: R$ " + valorConsumido.toFixed(2) + "<br>";
      divisaoConta += "Valor do serviço por cliente: R$ " + valorServico.toFixed(2) + "<br>";
      divisaoConta += "<br>";
    }
  
    document.getElementById("divisaoConta").innerHTML = divisaoConta;
  }
  
  function limpar() {
    document.getElementById("total").value = "";
    document.getElementById("numClientes").value = "";
    document.getElementById("clientes").innerHTML = `
      <h2>Clientes</h2>
      <div class="cliente">
        <input type="text" class="nomeCliente" placeholder="Nome do Cliente">
        <button onclick="excluirCliente(this)">Excluir</button>
      </div>
    `;
    document.getElementById("produtos").innerHTML = `
      <h2>Produtos</h2>
      <div class="produto">
        <input type="text" class="nomeProduto" placeholder="Nome do Produto">
        <input type="number" class="precoProduto" placeholder="Preço do Produto">
        <button onclick="excluirProduto(this)">Excluir</button>
      </div>
    `;
    document.getElementById("divisaoConta").innerHTML = "";
  }
  