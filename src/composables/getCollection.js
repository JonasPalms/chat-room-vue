import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const getCollection = (collection) => {

    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

    const unsub = collectionRef.onSnapshot((snapshot) => {
        console.log('snapshot')
        let results = []

        snapshot.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })

        documents.value = results
        error.value = null;
    }, (err) => {
        console.log(err.message)
        documents.value = null;
        error.value = 'could not fetch data'
    })

    return { documents, error, unsub }
}

export default getCollection; 