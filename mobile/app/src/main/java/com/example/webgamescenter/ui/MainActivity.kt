package com.example.webgamescenter.ui

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.example.webgamescenter.R
import com.example.webgamescenter.constantes.Constants
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.toolbar.*

class MainActivity : AppCompatActivity(), View.OnClickListener {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        cadastreSe.setOnClickListener(this)
        entrar.setOnClickListener(this)

        insertToolbar()
    }

    private fun insertToolbar() {
        setSupportActionBar(toolbar)
        supportActionBar!!.title = "Web Games Center"
    }

    override fun onClick(v: View) {
        if (v.id == R.id.cadastreSe){
            val intent = Intent(this, cadastroDeUsuario::class.java)
            intent.putExtra("operacao", Constants.OPERACAO_NOVO_CADASTRO)

            startActivity(intent)
        }
        if(v.id == R.id.entrar){
            val intent = Intent(this, loja::class.java)
            intent.putExtra("operacao", Constants.OPERACAO_LOGIN)

            startActivity(intent)
        }

    }

}
