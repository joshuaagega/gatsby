// create pages dinamically
exports.createsPages = async ({graphql,actions}) =>{

const {createPage} = actions
const result =  await graphql(`
query GetProducts {
  products : allContentfulProduct {
    nodes {
     
      slug
     
    }
  }
}
`)
result.data.products.nodes.forEach(element => {
  createPage({
    path:""
  })
});
}