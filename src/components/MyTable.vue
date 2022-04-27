<script>
export default {
  data() {
    return {
      authors: [
        {
          id: 1,
          name: "Toni Morrison",
          country: "USA",
          comment:
            "Her works often depict difficult circumstances and the dark side of humanity, but still convey integrity and redemption.",
        },
        {
          id: 2,
          name: "Jorge Luis Borges",
          country: "Argentina",
          comment: 'Believe me, you need to read "The Immortal".',
        },
        {
          id: 3,
          name: "Mary Shelley",
          country: "United Kingdom",
          comment:
            "She believed that people could improve society through the responsible exercise of political power, but she feared that the irresponsible exercise of power would lead to chaos.",
        },
        {
          id: 4,
          name: "Oscar Alderete",
          country: "Perú",
          comment: "Well, this guy just write code.",
        },
      ],
    };
  },
  methods: {
    editIt(obj) {
      window.app.loader.show();

      // to update 'count' from this component
      this.$emit("updateCount");

      setTimeout(() => {
        window.app.loader.hide();
        window.app.toast.show({
          message: `Cannot access to author ${obj.name}'s record!`,
          type: "error",
        });
      }, 1000);
    },
    deleteIt(obj) {
      window.app.dialog.deploy(
        {
          title: "WARNING",
          message: `Are you sure you want to delete ${obj.name}'s record?`,
        },
        () => {
          this.editIt(obj);
        },
        () => {
          window.app.toast.show({
            message: `Yeah, this writer is too good to be deleted!`,
            type: "success",
          });
        }
      );
    },
  },
};
</script>

<template>
  <table className="my-table">
    <thead>
      <tr>
        <th>Author</th>
        <th>Country</th>
        <th>Comment</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="author in this.authors" :key="author.id">
        <td>{{ author.name }}</td>
        <td>{{ author.country }}</td>
        <td>{{ author.comment }}</td>
        <td><a @click="editIt(author)">EDIT</a></td>
        <td><a @click="deleteIt(author)">DELETE</a></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.my-table {
  border-collapse: collapse;
}

.my-table tr:nth-child(even) {
  background-color: #eee;
}

.my-table th,
.my-table td {
  border: solid 1px #ccc;
  padding: 0.5em;
}

.my-table td {
  text-align: left;
}

.my-table td a {
  display: inline-block;
  cursor: pointer;
  background-color: #ccc;
  color: #222;
  padding: 0.25em 0.5em;
}
</style>
