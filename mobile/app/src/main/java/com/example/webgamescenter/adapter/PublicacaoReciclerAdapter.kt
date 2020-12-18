package com.example.webgamescenter.adapter

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.webgamescenter.R
import com.example.webgamescenter.model.Publicacao
import kotlinx.android.synthetic.main.layout_card_publicacao_view_holder.view.*

class PublicacaoReciclerAdapter  ( var listaPublicacao: ArrayList<Publicacao>) : RecyclerView.Adapter <PublicacaoReciclerAdapter.PublicacaoViewHolder> () {


    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PublicacaoViewHolder {
        val itemView = LayoutInflater.from(parent.context).inflate(R.layout.layout_card_publicacao_view_holder, parent, false)

        return PublicacaoViewHolder(itemView)
    }

    override fun getItemCount(): Int {
        return  listaPublicacao.size
    }

    override fun onBindViewHolder(holder: PublicacaoViewHolder, position: Int) {
        val publicacao = listaPublicacao[position]
        holder.bind(publicacao)
    }

    class PublicacaoViewHolder (itemView: View) : RecyclerView.ViewHolder (itemView) {
        fun bind(publicacao: Publicacao){

            itemView.nameUser.text = publicacao.name
            itemView.date.text = publicacao.date.toString()

            itemView.texto.text = publicacao.texto

        }

    }


}