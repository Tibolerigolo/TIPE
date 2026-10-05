let () =
  Js.export "ocamlMain"
    (object%js
       method hello = Js.string "Bonjour depuis OCaml compilé en JS !"
    end)
