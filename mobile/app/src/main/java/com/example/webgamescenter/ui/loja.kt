package com.example.webgamescenter.ui

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.webgamescenter.R
import kotlinx.android.synthetic.main.activity_loja.*

class loja : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_loja)

        val recyclerView = recyclerViewLoja
        recyclerView.layoutManager = LinearLayoutManager(applicationContext)
       // recyclerView.adapter =
    }
}
