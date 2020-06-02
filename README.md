# vue-storybook-sample

[English](README_en.md)

## 概要

- Vue.js + Storybook のサンプルです。

## 実行環境

- Node.js - 12.x
- Yarn - 1.17.x

## 使用ライブラリ

- vue - 2.6.x
- @storybook/vue - 5.3.x
- @storybook/addon-actions - 5.3.x
- @storybook/addon-knobs - 5.3.x

## 動作確認

### 1. サンプルのダウンロード

```bash
git clone https://github.com/yasu-s/vue-storybook-sample.git
```

### 2. ブランチ切り替え

```bash
cd vue-storybook-sample
git checkout develop/knobs
```

### 3. パッケージインストール  

```bash
yarn
```

### 4. サンプルの起動  

```bash
yarn storybook
```

## 実行確認

- http://localhost:8080/

![storybook-knobs](https://user-images.githubusercontent.com/2668146/83464379-af8f7a00-a4ab-11ea-9ac6-5b843768f874.gif)

## 参考URL

- https://storybook.js.org/docs/guides/guide-vue/
- https://github.com/storybookjs/storybook/tree/next/examples/vue-kitchen-sink
