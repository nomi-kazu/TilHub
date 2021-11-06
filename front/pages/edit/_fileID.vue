<template>
  <div>
    <EditFileidTemplate
      v-model="markdown"
      :fileid="fileID"
      :is-both="isBoth"
      :is-edit="isEdit"
      :is-view="isView"
      @post="post"
    />
  </div>
</template>

<script>
const DemoMd = `# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading
## Emphasis
**This is bold text**
__This is bold text__
*This is italic text*
_This is italic text_
~~Strikethrough~~
## Blockquotes
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
## Lists
Unordered
+ Create a list by starting a line with '+', '-', or '*'
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
Ordered
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
1. You can use sequential numbers...
1. ...or keep all the numbers as '1.'
Start numbering with offset:
57. foo
1. bar
## Link
[TilHub github](https://github.com/nomi-kazu/TilHub)
`

const DEFALUT_STATUS = 'both'

export default {
  middleware: 'authenticated',

  data: () => ({
    markdown: DemoMd // APIからの値を入れる
  }),

  computed: {
    fileID () {
      return this.$route.params.fileID
    },

    defaultStatus () {
      return DEFALUT_STATUS
    },

    isBoth () {
      const LABEL = 'both'
      const status = this.$route.query.status
      return status ? status === LABEL : this.defaultStatus === LABEL
    },

    isEdit () {
      const LABEL = 'edit'
      const status = this.$route.query.status
      return status ? status === LABEL : this.defalutStatus === LABEL
    },

    isView () {
      const LABEL = 'view'
      const status = this.$route.query.status
      return status ? status === LABEL : this.defalutStatus === LABEL
    }
  },

  methods: {
    post (){
      // 投稿処理をする
      this.$router.push({ path: '/edit/success', query: {
        fileid: this.fileID
      }})
    }
  }
}
</script>
