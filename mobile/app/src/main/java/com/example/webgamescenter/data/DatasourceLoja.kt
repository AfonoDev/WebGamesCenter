package com.example.webgamescenter.data

import com.example.webgamescenter.model.Loja

class DatasourceLoja {

    companion object {

        fun getCardLoja() : ArrayList <Loja>{

            var cardLoja = ArrayList<Loja> ()

            cardLoja.add(Loja(1, "Gift Card"))
            cardLoja.add(Loja(2, "Item 2"))

            return cardLoja
        }

    }
}