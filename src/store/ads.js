export default {
    state: {
        ads: [{
                title: "First",
                desc: "First Desc",
                promo: true,
                src: "https://memepedia.ru/wp-content/uploads/2018/12/150412976013508192-kopiya-768x576.jpg",
                id: "1"
            },
            {
                title: "Second",
                desc: "Second Desc",
                promo: true,
                src: "https://pbs.twimg.com/media/EhU27mUX0AAXALt.jpg",
                id: "2"
            },
            {
                title: "Third",
                desc: "Thitd Desc",
                promo: true,
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpEDf45CU10bA_92vU6YWEC5XQsTFCPqmow&usqp=CAU",
                id: "3"
            },
            {
                title: "Fouth",
                desc: "Fouth Desc",
                promo: true,
                src: "https://icdn.lenta.ru/images/2020/09/30/13/20200930130228617/wide_16_9_4e89fe8ed3801e4f326fad70ff8dd743.jpg",
                id: "4"
            },
            {
                title: "Fifth",
                desc: "Fifth Desc",
                promo: true,
                src: "https://memepedia.ru/wp-content/uploads/2018/12/bwmbenoj9k0.jpg",
                id: "5"
            }

        ]
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload)
        }

    },
    actions: {
        createAd({ commit }, payload) {
            payload.id = Math.random()
            commit('createAd', payload)
        }

    },
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                return ad.promo
            })
        },
        myAds(state) {
            return state.ads
        },
        adById(state) {
            return id => {
                return state.ads.find(ad => ad.id == id)
            }
        }

    }
}