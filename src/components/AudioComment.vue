<template>
  <div class="comment" @click="handleClick">
    <span class="timestamp">{{ cmt?.startTimeString }}~{{cmt?.endTimeString}}</span>
    <span class="content">{{ cmt?.content }}</span>
  </div>
  
</template>

<script lang="ts">
import { AudioComment } from '../types';
import { defineComponent, PropType } from 'vue';
export default defineComponent({
  name: 'AudioComment',
  props: {
    cmt: Object as PropType<AudioComment>
  },
  methods: {
    handleClick() {
      // If there's an end time, emit play-segment event for segment playback
      if (this.cmt?.endTimeNumber !== undefined) {
        this.$emit('play-segment', this.cmt?.startTimeNumber, this.cmt?.endTimeNumber);
      } else {
        // Otherwise, emit move-playhead for regular comment playback
        this.$emit('move-playhead', this.cmt?.startTimeNumber);
      }
    },
    emitRemove() {
      this.$emit('remove', this.cmt.index);
    }
  },
})
</script>

<style scoped>
.comment {
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
  display: flex !important;    
}

.comment:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.timestamp {
  font-weight: bold;
  margin-right: 18px;
  font-family: monospace;

  /* 新增的样式 */
  white-space: nowrap;     /* 强制文本不换行 */
  overflow: hidden;        /* 隐藏超出容器部分的内容 */
  text-overflow: ellipsis; /* 当内容被隐藏时，显示省略号 (...) */
  width: 100%;             /* 让 span 占据父容器的全部宽度 */
}

.content {
	overflow: hidden;
	text-overflow: ellipsis;
}


</style>