<template>
    <div class="dashboard">
        <h1 class="subheading grey--text">Dashboard</h1>
        <v-container class="my-5">
            <v-layout row class="mb-3">
                <!-- Listing by folders -->
                <v-tooltip top>
                    <v-btn
                        small
                        flat
                        color="grey"
                        @click="sortBy('title')"
                        slot="activator"
                    >
                        <v-icon left small>folder</v-icon>
                        <span class="caption text-lowercase">by title</span>
                    </v-btn>
                    <span>Sort by movie title</span>
                </v-tooltip>
                <!-- Listing by name -->

                <v-tooltip top>
                    <v-btn
                        small
                        flat
                        color="grey"
                        @click="sortBy('person')"
                        slot="activator"
                    >
                        <v-icon left small>person</v-icon>
                        <span class="caption text-lowercase">By person</span>
                    </v-btn>
                    <span>Sort movie by person</span>
                </v-tooltip>
            </v-layout>
            <v-card flat v-for="movie in movies" :key="movie.title">
                <v-layout row wrap :class="`pa-3 movie ${movie.status}`">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Movie title</div>
                        <div>{{ movie.title }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Person</div>
                        <div>{{ movie.person }}</div>
                    </v-flex>
                    <v-flex xs6 sm4 md2>
                        <div class="caption grey--text">Due by</div>
                        <div>{{ movie.due }}</div>
                    </v-flex>
                    <v-flex xs2 sm4 md2>
                        <div>
                            <v-chip
                                class="right"
                                small
                                :class="
                                    `${movie.status} white--text caption my-2`
                                "
                                >{{ movie.status }}</v-chip
                            >
                        </div>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import db from '@/fb'
export default {
    data() {
        return {
            movies: []
        }
    },
    methods: {
        sortBy(prop) {
            this.movies.sort((a, b) => (a[prop] < b[prop] ? -1 : 1))
        }
    },
    created() {
        db.collection('movies').onSnapshot(res => {
            const changes = res.docChanges()

            changes.forEach(change => {
                if (change.type === 'added') {
                    this.movies.push({
                        ...change.doc.data(),
                        id: change.doc.id
                    })
                }
            })
        })
    }
}
</script>

<style>
.movie.complete {
    border-left: 4px solid #3cd1c2;
}
.movie.ongoing {
    border-left: 4px solid orange;
}
.movie.overdue {
    border-left: 4px solid tomato;
}
.v-chip.complete {
    background: #3cd1c2;
}
.v-chip.ongoing {
    background: orange;
}
.v-chip.overdue {
    background: tomato;
}
</style>
