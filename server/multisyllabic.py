import jinja2
from pathlib import Path

ROOT = Path(__file__).absolute().parent

SCHEMA = {
    "overview": {
        "course": True,
        "professor": True,
        "learning": True
    }
}

loader = jinja2.FileSystemLoader(str(ROOT.parent.joinpath("template")))
environment = jinja2.Environment(loader=loader)


def generate(schema: dict):
    """Generate a syllabus with a schema and extra data."""

    template = environment.get_template("syllabus.html")
    return template.render(schema=schema)


if __name__ == "__main__":
    with open("syllabus.html", "w") as file:
        file.write(generate(SCHEMA))
