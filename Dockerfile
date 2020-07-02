FROM python:3.7.4-stretch AS base
WORKDIR /workspace
RUN pip install pipenv==2018.11.26

FROM base as runtime
COPY Pipfile* ./
RUN pipenv install --system --deploy \
    && rm Pipfile*

FROM runtime AS dev
COPY Pipfile* ./
RUN pipenv install --system --deploy --dev \
    && rm Pipfile*

FROM runtime AS prod
COPY . ./
RUN ln -s /workspace/celineyeh-cli /usr/local/bin/celineyeh-cli
