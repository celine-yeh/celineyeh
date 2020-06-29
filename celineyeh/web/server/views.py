from flask import Blueprint, render_template


blueprint = Blueprint('web', __name__)


@blueprint.route('/')
def index():
    return render_template('main/home.html')
