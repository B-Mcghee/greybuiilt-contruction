<template>
<div class=" text-gray-50">

<button @click="remove" @click.prevent="show"
            class=" bg-red-500 px-1 py-0.5 rounded-xl text-White">
            Delete
        
          </button>
              <modal  name="modal-delete" class="text-primary text-3xl max-w-sm">
                <button @click="removeItem" @click.prevent="hide" class=" bg-red-500 px-1 py-0.5 rounded-xl text-White">Yes</button>
            </modal>
</div>
</template>

<script>
export default {
    props:['project'],
    name: 'modal-delete',
    methods: {
        show () {
            this.$modal.show('modal-delete');
        },
        hide () {
            this.$modal.hide('modal-delete');
        },
        remove($event){
            console.log($event);
            console.log(this.project);
        },
        removeItem(){
            this.$emit('remove',this.project.id)
        }
    }
}
</script>

<style>

</style>