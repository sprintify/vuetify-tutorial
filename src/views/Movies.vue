<template>
    <div class="movies">
        <h1 class="subheading grey--text">Movies</h1>

        <v-container class="my-5">
            <v-expansion-panel>
                <v-expansion-panel-content
                    v-for="movie in myMovies"
                    :key="movie.title"
                >
                    <div slot="header">
                        {{ movie.title }}
                    </div>
                    <v-card>
                        <v-card-text class="grey--text px-4">
                            <div class="font-weight-bold">
                                due by {{ movie.due }}
                            </div>
                            <div>{{ movie.content }}</div>
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
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
    computed: {
        myMovies() {
            return this.movies.filter(movie => {
                return movie.person === 'The Net Ninja'
            })
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
