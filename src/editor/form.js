import React from 'react';
import { useStore } from 'effector-react';
import { InputField } from '../components/input-field';
import { TextField } from '../components/text-field';
import { Input } from './form-fields';
import { Button } from '../components/button';
import { TagList } from './tag-list';
import { onAddTag, isLoading, createArticle, onChangeText } from './model';

export const Form = () => {
  const loading = useStore(isLoading);

  return (
    <form>
      <fieldset>
        <InputField
          name="title"
          placeholder="Article Title"
          onChange={onChangeText}
        />

        <InputField
          name="description"
          placeholder="What's this article about?"
          onChange={onChangeText}
        />

        <TextField
          name="body"
          placeholder="Write your article (in markdown)"
          onChange={onChangeText}
        />

        <Input name="tagInput" placeholder="Enter tags" onKeyDown={onAddTag} />
        <TagList />

        <Button
          disabled={loading}
          onClick={() => {
            createArticle();
          }}>
          Publish Article
        </Button>
      </fieldset>
    </form>
  );
};
