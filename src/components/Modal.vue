<template>
    <div class="modal fade "  tabindex="-1" id="photoGaleryModal" data-bs-theme="dark">
        <div class="modal-dialog modal-lg">
            <div class="modal-content darker-bg">
               
                
                <div class="modal-body">
                    <button type="button" class="btn-close position-absolute top-0 end-0 m-2 border bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    <slot/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>