package com.example.atm_alura;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/atm")
public class Micontrolador {



    @GetMapping("/ejecutarJava")

    public String miFuncionJava(){
        if (Atributos.saldo <= 0) {
            return "ATM no disponible o sin saldo suficiente.";
        }else {
            return "Bienvenido al ATM";
        }
    }

    @GetMapping("/saldoUsuario")

    public int saldoFuncion() {
        return Atributos.saldo;
    }

    @PutMapping("/actualizarSaldo/{id}")

    public ResponseEntity<String> actualizarSaldo(@PathVariable Long id, @RequestBody SaldoRequest saldoRequest){
        Atributos.saldo += saldoRequest.getSaldo();

        return ResponseEntity.ok("Saldo actualizado correctamente para el ID: " + id + "SALDO: " + Atributos.saldo );
    }

    @PutMapping("/quitarSaldo/{id}")
    public ResponseEntity<String> quitarSaldo(@PathVariable Long id, @RequestBody SaldoRequest saldoRequest) {
        if (saldoRequest.getSaldo() > Atributos.saldo) {
            return ResponseEntity.badRequest().body("No puedes retirar más de lo que tienes en tu cuenta");

        } else {
            Atributos.saldo -= saldoRequest.getSaldo();
        }
        return ResponseEntity.ok("Se retiraron " + saldoRequest.getSaldo() + " del saldo para el ID: " + id + ". Saldo actual: " + Atributos.saldo);
    }

    static class SaldoRequest {
        private int saldo;

        public int getSaldo() {
            return saldo;

        }
        public void setSaldo(int saldo) {
            this.saldo = saldo;
        }
    }
}