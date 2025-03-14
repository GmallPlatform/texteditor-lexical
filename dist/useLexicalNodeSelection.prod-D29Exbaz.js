import { o as d } from "./index-D4Isi5fY.js";
import { $getSelection as i, $isNodeSelection as u, $createNodeSelection as c, $setSelection as f, $getNodeByKey as p } from "lexical";
import { useState as S, useEffect as m, useCallback as l } from "react";
function s(t, e) {
  return t.getEditorState().read(() => {
    const n = p(e);
    return n !== null && n.isSelected();
  });
}
function y(t) {
  const [e] = d(), [n, a] = S(() => s(e, t));
  return m(() => {
    let o = !0;
    const r = e.registerUpdateListener(() => {
      o && a(s(e, t));
    });
    return () => {
      o = !1, r();
    };
  }, [e, t]), [n, l((o) => {
    e.update(() => {
      let r = i();
      u(r) || (r = c(), f(r)), u(r) && (o ? r.add(t) : r.delete(t));
    });
  }, [e, t]), l(() => {
    e.update(() => {
      const o = i();
      u(o) && o.clear();
    });
  }, [e])];
}
export {
  y as u
};
