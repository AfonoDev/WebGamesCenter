package com.example.webgamescenter.ui

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.webgamescenter.R
import com.example.webgamescenter.adapter.PublicacaoReciclerAdapter
import com.example.webgamescenter.data.DatasourcePublicacao
import kotlinx.android.synthetic.main.activity_index.*

class index : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_index)

        val recyclerView = recyclerViewPublicacao
        recyclerView.layoutManager = LinearLayoutManager(applicationContext)
        recyclerView.adapter = PublicacaoReciclerAdapter(DatasourcePublicacao.getCardPublicacao())
    }
}
