package com.example.webgamescenter.ui

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import com.example.webgamescenter.R
import kotlinx.android.synthetic.main.activity_login_de_usuario.*

class loginDeUsuario : AppCompatActivity(), View.OnClickListener {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login_de_usuario)

        buttonLogin.setOnClickListener(this)

    }

    override fun onClick(v: View) {
        if(v.id == R.id.buttonLogin){
            val intent = Intent(this, index::class.java)
            startActivity(intent)
        }
    }
}
