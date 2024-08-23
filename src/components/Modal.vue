<template>
    <div class="modal fade " tabindex="-1" id="photoGaleryModal" data-bs-theme="dark">
        <div class="modal-dialog modal-lg">
            <div class="modal-content darker-bg">


                <div class="modal-body">
                    <button type="button" class="btn-close position-absolute top-0 end-0 m-2 border bg-white"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    <button @click="pageup()" type="button"
                        class="bg-blur fa fa-chevron-right position-absolute top-50 end-0 m-2 p-3"></button>
                    <button type="button"
                        class="bg-blur fa fa-chevron-left position-absolute top-50 start-0 m-2 p-3"></button>

                        <img :src="gallery[imageId]" class="w-100">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(["imageId", "gallery"]);




let tempimage = ref() 

let imgid = ref(tempimage);

console.log(
    imgid 
);

const pageup = () =>{
    imgid.value +=  1;
    
}

</script>

<style scoped>
.bg-blur {
    border: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 30%;
    backdrop-filter: blur(2px);
}
.bg-blur:hover {
    background-color: rgba(255, 255, 255, 0.4);
}


</style>