export class ContaCorrente{
    agencia;
    cliente;
   
  
    transferir (valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    
    }

    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) {
            return;
        
        }
        this._saldo += valor;
    }

        
}  
