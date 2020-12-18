package com.example.webgamescenter.data

import com.example.webgamescenter.model.Publicacao

class DatasourcePublicacao {

    companion object{

        fun getCardPublicacao() : ArrayList<Publicacao>{

            var cardPublicacao = ArrayList<Publicacao>()

            cardPublicacao.add(Publicacao(1, "pokemon", 2020-12-0,"lalala lend", 4.0 ))
            cardPublicacao.add(Publicacao(2, "jubiscreide", 2020-12-0,"pokemon lend", 4.0 ))
            cardPublicacao.add(Publicacao(3, "jb nascimento", 2020-12-0,"brawrs ralha", 4.0 ))
            cardPublicacao.add(Publicacao(4, "luluzinha", 2020-12-0,"agora 2.0", 4.0 ))

            return cardPublicacao
        }
    }
}