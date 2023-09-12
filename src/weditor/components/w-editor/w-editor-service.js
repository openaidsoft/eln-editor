// import axios from "axios";
const axios = {};
// import Utils from "@/components/cmm/Utils.js";
// import { blockStore } from "@/store/blockStore.js";
// import VariableContent, { basic_block } from "@/Content.js";
import Utils from "@/weditor/components/cmm/Utils.js";
import { blockStore } from "@/weditor/store/blockStore.js";
import VariableContent, { basic_block } from "@/weditor/Content.js";
const uid = new Utils();

// 해당 노트를 불러옴
export const getNoteService = async (note_uid) => {
  let noteRes;
  // await axios.get(`${VariableContent.URL}/note/${note_uid}`).then((res) => {
  //   noteRes = res.data[0];
  // });
  // noteRes = {
  //     "note_uid": 421,
  //     "note_mng_no": "null",
  //     "title": "제목없음 ",
  //     "del_yn": "N",
  //     "grd_cd": "NGRD001",
  //     "shared_yn": "N",
  //     "st_cd": "NS01",
  //     "ownr_uid": "sooah1004",
  //     "pjt_uid": null,
  //     "content": "[{\"block\":{\"background\":\"\",\"color\":\"\",\"icon\":\"\",\"iconStyle\":\"\",\"style\":\"\",\"editTag\":\"\",\"editTagId\":\"\",\"html\":\"text\",\"tag\":\"p\",\"positionId\":\"lmfmh7ay0.\"},\"id\":\"a7e1a9b7b\",\"order\":0,\"comments\":\"\",\"image\":{\"url\":\"\",\"imageNm\":\"\"}},{\"block\":{\"background\":\"\",\"color\":\"\",\"icon\":\"\",\"iconStyle\":\"\",\"style\":\"\",\"editTag\":\"\",\"editTagId\":\"\",\"html\":\"h1\",\"tag\":\"h1\",\"positionId\":\"lmfmuecf0.\"},\"id\":\"a9502fb7a\",\"order\":1,\"comments\":\"\",\"image\":{\"url\":\"\",\"imageNm\":\"\"}},{\"block\":{\"background\":\"\",\"color\":\"\",\"icon\":\"\",\"iconStyle\":\"\",\"style\":\"\",\"editTag\":\"\",\"editTagId\":\"\",\"html\":\"h2\",\"tag\":\"h2\",\"positionId\":\"lmfmuh290.\"},\"id\":\"aa8591efd\",\"order\":2,\"comments\":\"\",\"image\":{\"url\":\"\",\"imageNm\":\"\"}},{\"block\":{\"background\":\"\",\"color\":\"\",\"icon\":\"\",\"iconStyle\":\"\",\"style\":\"\",\"editTag\":\"formula\",\"editTagId\":\"lmfmupq30.\",\"html\":\"\",\"tag\":\"formula\",\"positionId\":\"lmfmujk20.\",\"editTagItem\":{\"data\":\"\\\\sqrt{a^2+b^3}\"}},\"id\":\"a6be37240\",\"order\":3,\"comments\":\"\",\"image\":{\"url\":\"\",\"imageNm\":\"\"}},{\"block\":{\"background\":\"\",\"color\":\"\",\"icon\":\"\",\"iconStyle\":\"\",\"style\":\"\",\"editTag\":\"\",\"editTagId\":\"\",\"html\":\"🤣\",\"tag\":\"p\",\"positionId\":\"lmfmupq30.\"},\"id\":\"af1342ec5\",\"order\":4,\"comments\":\"\",\"image\":{\"url\":\"\",\"imageNm\":\"\"}},{\"block\":{\"background\":\"\",\"color\":\"\",\"icon\":\"\",\"iconStyle\":\"\",\"style\":\"\",\"editTag\":\"jsme\",\"editTagId\":\"lmfnzay30.\",\"html\":\"\",\"tag\":\"jsme\",\"positionId\":\"lmfn3pad0.\",\"editTagItem\":{\"data\":\"CC\"}},\"id\":\"ad10d254c\",\"order\":5,\"comments\":[{\"eachCommentId\":\"lmfn8cxq0.\",\"date\":\"2023-9-12 10:37:51\",\"userId\":\"sooah\",\"comment\":\"ㅁㅁㅁ\"},{\"eachCommentId\":\"lmfn8d1h0.\",\"date\":\"2023-9-12 10:37:51\",\"userId\":\"sooah\",\"comment\":\"\"},{\"eachCommentId\":\"lmfn8en40.\",\"date\":\"2023-9-12 10:37:53\",\"userId\":\"sooah\",\"comment\":\"ㄷㄷㄷ\"},{\"eachCommentId\":\"lmfn8ep70.\",\"date\":\"2023-9-12 10:37:53\",\"userId\":\"sooah\",\"comment\":\"\"}],\"image\":{\"url\":\"\",\"imageNm\":\"\"}},{\"block\":{\"background\":\"\",\"color\":\"\",\"icon\":\"\",\"iconStyle\":\"\",\"style\":\"\",\"editTag\":\"excel\",\"editTagId\":\"lmfnzxvi0.\",\"html\":\"\",\"tag\":\"excel\",\"positionId\":\"lmfnzay20.\"},\"id\":\"af40468e6\",\"order\":6,\"comments\":\"\",\"image\":{\"url\":\"\",\"imageNm\":\"\"}},{\"block\":{\"background\":\"\",\"color\":\"\",\"icon\":\"\",\"iconStyle\":\"\",\"style\":\"\",\"editTag\":\"\",\"editTagId\":\"\",\"html\":\"\",\"tag\":\"p\",\"positionId\":\"lmfnzxvh0.\"},\"id\":\"aac97f8fe\",\"order\":7,\"comments\":\"\",\"image\":{\"url\":\"\",\"imageNm\":\"\"}}]",
  //     "hot_list": "N",
  //     "reg_dttm": "2023-9-12 10:16:44",
  //     "updt_dttm": "2023-9-12 11:23:46"
  // };

  noteRes = {
      "note_uid": 422,
      "note_mng_no": "null",
      "title": "제목없음 ",
      "del_yn": "N",
      "grd_cd": "NGRD001",
      "shared_yn": "N",
      "st_cd": "NS01",
      "ownr_uid": "sooah1004",
      "pjt_uid": null,
      "content": "{\"block\":{\"background\":\"\",\"color\":\"\",\"icon\":\"\",\"iconStyle\":\"\",\"style\":\"\",\"editTag\":\"\",\"editTagId\":\"\",\"html\":\"\",\"tag\":\"p\",\"positionId\":\"lmft9le10.\"},\"id\":\"aafcbc9b0\",\"order\":0,\"comments\":\"\",\"image\":{\"url\":\"\",\"imageNm\":\"\"}}",
      "hot_list": "N",
      "reg_dttm": "2023-9-12 13:26:46",
      "updt_dttm": "2023-9-12 13:26:46"
  }

  return noteRes;
};

// 해당 노트 코멘트 불러옴
export const getNoteCmmtService = async (note_uid) => {
  let noteCmmtRes;
  // await axios.get(`${VariableContent.URL}/cmmt/${note_uid}`).then((res) => {
  //   noteCmmtRes = res.data;
  // });
  noteCmmtRes = []
  return noteCmmtRes;
};

// 노트 저장
export const saveBlockService = async (note_uid, title, blockBox) => {
  saveNote(note_uid, title, blockBox)
    .then(() => {
      console.info("Saved");
    })
    .catch((err) => {
      if (err.message === "Network Error") {
        blockStore().saveLocalStorage();
      }
    });
};

const saveNote = async (note_uid, title, blockBox) => {
  return;
  // return axios.post(`${VariableContent.URL}/note/${note_uid}`, {
  //   title: title,
  //   content: JSON.stringify(blockBox),
  //   updtDttm: uid.getTime(),
  // });
};

// 새로운 노트 작성, 기본 노트 빈 페이지를 불러옴
const getNewNote = async () => {
  const basicBlock = {
    content: JSON.stringify(basic_block()),
    title: "제목없음 ",
  };
  return basicBlock;
};

// note_uid 생성
export const getNoteSeq = async () => {
  // const id = await axios.get(`${VariableContent.URL}/note/seq`).then((res) => {
  //   return res.data[0].nextval;
  // });
  const id = 3;
  return id;
};

// 노트 초기 저장
export const setNoteService = async (id, pjt_uid, usr_id, tempContent) => {
  const content = await getNewNote();

  const noteContent = {
    note_uid: id,
    note_mng_nm: null,
    note_title: content.title,
    reg_dttm: uid.getTime(),
    updt_dttm: uid.getTime(),
    del_yn: "N",
    grd_cd: "NGRD001",
    shared_yn: "N",
    st_cd: "NS01",
    ownr_uid: usr_id,
    content: content.content,
    pjt_uid: pjt_uid ? pjt_uid : null,
    hot_list: "N",
  };
  // await axios
  //   .post(`${VariableContent.URL}/note`, {
  //     content: noteContent,
  //   })
  //   .then((res) => {
  //     console.log("새 노트 생성");
  //   });
};

// 해당 노트 삭제
export const deleteNoteService = async (id) => {
  this.axios.patch(`${VariableContent.URL}/note/del/${id}`).then((res) => {});
};

export const checkCookie = () => {
  this.$cookies.get("hotList");
  this.$cookies.get("screenSize");
};
