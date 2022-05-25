import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const getCollection = (collection) => {

    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

    collectionRef.onSnapshot((snapshot) => {

        let results = []

        snapshot.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })

        documents.value = results

    }).

}

export default getCollection; 