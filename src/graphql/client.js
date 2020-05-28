import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: 'https://apollo-music-mykola.herokuapp.com/v1/graphql'
})

export default client;
