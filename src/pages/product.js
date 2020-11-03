import React from 'react'
import Layout from '../components/Layout'
import styles from '../components/product.module.css'
console.log(styles);
const product = () => {
  return (
    <Layout>
      <div className ={styles.page}>
      <h1>This is our product page</h1>
        <p className="styles.text">
     NAIROBI, Kenya, Nov 3 – A section of youths under the umbrella of Caravan for Building Bridges Initiative (BBI) have called for inclusion in the process of educating young people especially those in the villages about the report and its contents.
    Led by Kimori Machoka the youths argued that the National Secretariat that has been established to offer civic education on BBI does not represent Kenyan youth.
    “All youths willing and interested must be given a platform and a chance to be heard and to actively and acutely participate in the unifying process of the BBI.
     Inclusivity is the key to unity; it is fundamental principal upon which the BBI was anchored,” Machoka said.
   </p>
   </div>
    </Layout>
  )
}

export default product
