using Literate

# Filenames
jls = filter(x -> occursin(r"/[0-9]+-.*\.jl$", x), readdir("scripts", join = true))
ipynbs = replace.(replace.(jls, "scripts" => "notebooks"), ".jl" => ".ipynb")

# Create notebooks
rm("notebooks", recursive = true, force = true)
Literate.notebook.(jls, "notebooks", execute = true)

# Create markdown files
rm(joinpath("docs", "src"), recursive = true, force = true)
Literate.markdown.(jls, joinpath("docs", "src"), execute = true)

