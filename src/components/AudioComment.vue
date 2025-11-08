<template>
  <div class="comment" @click="handleClick">
    <span class="timestamp">{{ cmt?.startTimeString }}</span>
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
}

.comment:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.timestamp {
  font-weight: bold;
  margin-right: 8px;
  font-family: monospace;
}

.end-time {
  font-family: monospace;
  color: #666;
  margin-left: 4px;
  margin-right: 8px;
}

.content {
  flex: 1;
}
</style>