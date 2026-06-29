import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import Loader from "./Loader";

export default function RTE({ name, control, label, defaultValue = "" }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full">
      {label && <label className="mb-1 pl-1">{label}</label>}

      {loading && <Loader />}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="msmehwdkf7hi1sm4315bq58phbpx58jhk4l4cujyutroxy76"
            initialValue={defaultValue}
            onInit={() => setLoading(false)}
            init={{
              initialValue: defaultValue,
              statusbar: false,
              branding: false,
              promotion: false,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forceolor backcolor | forecolor | alignleft aligncenter alignright alignjustify | outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
